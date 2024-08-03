import corner from '../../assets/cornerbg.png'

const WorkInProgress = () => {
  return (
    <div className="bg-newmain h-screen flex justify-center items-center flex-col josefin-b text-newsec px-3 xl:px-0">
      <section
        className="z-50 py-5 sm:px-4 xl:px-24 rounded-3xl "
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <h1 className="text-7xl pb-3">Catalin Darii</h1>
        <div className="md:mt-5">
          <p className="text-6xl ">Il sito è attualmente in ricostruzione</p>
        </div>
      </section>
      <img src={`${corner}`} className="absolute h-full w-full z-0" />
    </div>
  )
}
export default WorkInProgress
