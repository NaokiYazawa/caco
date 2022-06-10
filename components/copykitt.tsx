import React from 'react';
import Form from './form';
import Results from './results';
import Image from 'next/image';
import logo from '../public/logo.png';
import toast from 'react-hot-toast';

const CopyKitt: React.FC = () => {
  const CHARACTER_LIMIT: number = 32;
  const ENDPOINT: string = process.env.NEXT_PUBLIC_ENDPOINT;
  const [prompt, setPrompt] = React.useState('');
  const [snippet, setSnippet] = React.useState('');
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log('Submitting: ' + prompt);
    setIsLoading(true);
    try {
      fetch(`${ENDPOINT}?prompt=${prompt}`)
        .then((res) => res.json())
        .then(onResult);
    } catch (error) {
      toast.error('Please check the communication status and try again.', {
        duration: 6000,
      });
    }
  };

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setPrompt('');
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null;

  if (hasResult) {
    displayedElement = (
      <Results
        snippet={snippet}
        keywords={keywords}
        onBack={onReset}
        prompt={prompt}
      />
    );
  } else {
    displayedElement = (
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        isLoading={isLoading}
        characterLimit={CHARACTER_LIMIT}
      />
    );
  }

  const gradientTextStyle =
    'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto';

  return (
    <div className="flex">
      <div className="max-w-lg m-auto">
        <div className="bg-slate-800 p-6 rounded-md">
          <div className="text-center my-6">
            <Image src={logo} width={42} height={42} alt="logo" />
            <h1>Caco</h1>
          </div>

          {displayedElement}
        </div>
      </div>
    </div>
  );
};

export default CopyKitt;
