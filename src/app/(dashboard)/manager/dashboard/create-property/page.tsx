import CreatePropertyForm from './components/CreatePropertyForm';

export default function Properties() {
  return (
    <section className='bg-stone-100 h-screen p-6 '>
      <div className='ml-3'>
        <h1 className='text-xl text-slate-800 font-bold'>Add a new property</h1>
        <p className='text-slate-600 mb-4'>
          Add a new property using detailed information
        </p>
      </div>
      <CreatePropertyForm />
    </section>
  );
}
