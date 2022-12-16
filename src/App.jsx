import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/MoonIcon'

function App() {

  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white tracking-[0.3em] text-2xl font-semibold">Todo</h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="bg-white py-2 rounded-md overflow-hidden flex gap-4 items-center px-4 mt-4">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo..." className="w-full outline-none text-gray-400" />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white">
          <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse with bluuweb</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>

          <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse with bluuweb</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>

          <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse with bluuweb</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>
          <section className='py-4 px-4 flex justify-between text-gray-400'>
            <span>5 Items Left</span>
            <button>Clear Completed</button>
          </section>

        </div>
      </main>

      <section className='container mx-auto px-4 mt-8'>
        <div className='bg-white flex justify-center p-4 gap-3 text-gray-500 font-bold rounded-md'>
          <button className='hover:text-indigo-600'>All</button>
          <button className='hover:text-indigo-600'>Active</button>
          <button className='hover:text-indigo-600'>Completed</button>
        </div>
      </section>
      <p className='text-center p-4 mt-8'> Drag and drop to reorder list</p>
    </div>
  )
}

export default App