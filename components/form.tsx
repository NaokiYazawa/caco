interface FormProps {
  prompt: string;
  setPrompt: any;
  onSubmit: any;
  isLoading: boolean;
  characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
  const isPromptValid =
    0 < props.prompt.length && props.prompt.length < props.characterLimit;
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

  let statusColor = 'text-slate-500';
  let statusText = null;
  if (!isPromptValid) {
    statusColor = 'text-red-400';
    statusText = `Input must be between 0 and ${props.characterLimit} characters.`;
  }

  return (
    <>
      <div className="mb-6 text-slate-400">
        <p>
          Tell me what your brand is about and I will generate copy and keywords
          for you.
        </p>
      </div>

      <input
        className="p-2 w-full rounded-md focus:outline-teal-400 focus:outline text-slate-700"
        type="text"
        placeholder="coffee"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div className={statusColor + ' flex justify-between my-2 mb-6 text-sm'}>
        <div>{statusText}</div>
        <div>
          {props.prompt.length}/{props.characterLimit}
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-teal-400 disabled:opacity-50 disabled:cursor-default w-full p-2 rounded-md  text-white from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={props.onSubmit}
        disabled={props.isLoading || !isPromptValid}
      >
        Submit
      </button>
    </>
  );
};

export default Form;
