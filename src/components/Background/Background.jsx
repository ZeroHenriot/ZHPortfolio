import video from '../../../public/assets/bg.mp4'

const Background = () => {
  return (
    <video autoPlay muted loop className="background-video">
      <source src={video} type="video/mp4" />
    </video>
  )
}

export default Background
