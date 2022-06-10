interface ResultsProps {
  prompt: string;
  snippet: string;
  keywords: string[];
  onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {
  const keywordElements = [];
  for (let i = 0; i < props.keywords.length; i++) {
    const element = (
      <div
        key={i}
        className='text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 p-1 text-teal-700 px-2'
      >
        #{props.keywords[i]}
      </div>
    );
    keywordElements.push(element);
  }

  const keywordElementsHolder = (
    <div className='flex flex-wrap gap-2 text-xl'>{keywordElements}</div>
  );

  const resultSection = (label: string, body: any) => {
    return (
      <div className='bg-slate-700 p-4 my-3 rounded-md'>
        <div className='text-slate-400 text-xl font-bold mb-4'>{label}</div>
        <div className='text-xl'>{body}</div>
      </div>
    );
  };

  return (
    <>
      <div className='mb-6'>
        {resultSection(
          'Prompt',
          <div className='text-2xl font-bold'>{props.prompt}</div>
        )}
        {resultSection('Branding Snippet', props.snippet)}
        {resultSection('Keywords', keywordElementsHolder)}
      </div>
      <div className='flex'>
        <button
          type='button'
          className='mx-auto text-white w-5/6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5'
        >
          Save (comming soon)
        </button>
      </div>
      <div className='flex'>
        <button
          onClick={props.onBack}
          type='button'
          className='mx-auto w-5/6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Results;
