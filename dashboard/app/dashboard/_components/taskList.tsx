/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7ABrkEbp9iL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export const TaskList = () => {
    return (
      <div className="flex items-center w-full py-4">
        <div className="flex items-center">
          <div className="rounded-full bg-[#34D399] text-white p-2">
            <CheckIcon className="w-5 h-5" />
          </div>
          <span className="ml-2 font-semibold text-[#34D399]">Scan Container</span>
        </div>
        <div className="flex-auto border-t-2 border-[#D1D5DB] mx-4" />
        <div className="flex items-center">
          <div className="rounded-full bg-[#D1D5DB] p-2">
            <SettingsIcon className="w-5 h-5 text-[#9CA3AF]" />
          </div>
          <span className="ml-2 font-semibold text-[#9CA3AF]">Scan Items</span>
        </div>
        <div className="flex-auto border-t-2 border-[#D1D5DB] mx-4" />
        <div className="flex items-center">
          <div className="rounded-full bg-[#D1D5DB] p-2">
            <SettingsIcon className="w-5 h-5 text-[#9CA3AF]" />
          </div>
          <span className="ml-2 font-semibold text-[#9CA3AF]">Analyze Simulation</span>
        </div>
        <div className="flex-auto border-t-2 border-[#D1D5DB] mx-4" />
        <div className="flex items-center">
          <div className="rounded-full bg-[#D1D5DB] p-2">
            <EyeIcon className="w-5 h-5 text-[#9CA3AF]" />
          </div>
          <span className="ml-2 font-semibold text-[#9CA3AF]">Plan Routes</span>
        </div>
      </div>
    )
  }
  
  function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }
  
  
  function EyeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  