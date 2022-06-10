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
      <div className='mb-6 text-slate-400'>
        <p className='text-lg'>
          Tell me what your brand is about and I will generate copy and keywords
          for you.
        </p>
      </div>

      <input
        className='p-2 w-full text-lg rounded-md focus:outline-teal-400 focus:outline text-slate-700'
        type='text'
        placeholder='coffee'
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div className={statusColor + ' flex justify-between my-2 mb-6 text-sm'}>
        <div>{statusText}</div>
        <div>
          {props.prompt.length}/{props.characterLimit}
        </div>
      </div>
      {props.isLoading ? (
        <button
          disabled
          type='button'
          className='bg-gradient-to-r from-teal-400 disabled:opacity-50 disabled:cursor-default w-full p-2 rounded-md  text-white from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2'
        >
          <svg
            role='status'
            className='inline w-4 h-4 mr-3 text-white animate-spin'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='#E5E7EB'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentColor'
            />
          </svg>
          Submitting
        </button>
      ) : (
        <button
          className='bg-gradient-to-r from-teal-400 disabled:opacity-50 disabled:cursor-default w-full p-2 rounded-md  text-white from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2'
          onClick={props.onSubmit}
          disabled={!isPromptValid}
        >
          Submit
        </button>
      )}
    </>
  );
};

export default Form;
