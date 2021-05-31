import * as Popover from '@radix-ui/react-popover'

const BagPopover = ({ className }) => {
  return (
    <Popover.Root>
      <Popover.Trigger className={className}>
        <svg
          className="w-5 fill-current text-brand-beige"
          viewBox="0 0 15 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="m5.68827 5.65625c.04594-2.5376 1.33531-3.3125 2.12374-3.3125.78844 0 2.07781.7749 2.12374 3.3125zm-2.00015 0c.05065-3.20878 1.83497-5.3125 4.12389-5.312502 2.28889-.000002 4.07329 2.103722 4.12389 5.312502h1.0641 2v2 4.99995c0 1.6569-1.3431 3-3 3h-10-2v-2-4.99995c0-1.65685 1.34315-3 3-3zm-.68812 2h10v4.99995c0 .5523-.4477 1-1 1h-10v-4.99995c0-.55228.44772-1 1-1z"
            fillRule="evenodd"
          />
        </svg>
      </Popover.Trigger>
      <Popover.Content
        className="overflow-y-scroll w-[450px] max-h-[80vh] bg-white shadow-lg rounded-lg origin-radix-popover-content animate-fadeDown"
        sideOffset={10}
      >
        <div className="flex flex-col items-start justify-between w-full px-4 py-6 bg-center bg-cover rounded-t-lg h-36 sm:px-6 lg:px-8 bg-bag-cover bg-blend-multiply">
          <h2 className="text-3xl text-center text-brand-beige font-header font-body">Your Bag</h2>
          <p className="mt-2 text-lg font-medium text-center text-brand-beige font-body">
            No items in cart yet
          </p>
        </div>
        <div className="flex items-center justify-center px-4 py-8 rounded-lg bg-gray-50 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <form action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm font-body">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-lg font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-lg font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-lg font-medium text-green-600 font-body hover:text-green-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-lg font-medium text-white bg-green-600 border border-transparent rounded-md font-body group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}

export default BagPopover
