import { useEffect, useRef } from 'react'

const Robot = () => {
  const splineViewerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://unpkg.com/@splinetool/viewer@1.9.27/build/spline-viewer.js'
    script.type = 'module'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="hidden lg:block" id="rel">
      <div id="cont-robot">
        <div className="spline">
          <spline-viewer
            ref={splineViewerRef}
            url="https://prod.spline.design/aaMwcNTcZs-u7uhw/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="logocover"></div>
        </div>
      </div>
    </div>
  )
}

export default Robot
