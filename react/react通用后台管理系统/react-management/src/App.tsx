import { useState } from 'react'
import { Button, Space } from 'antd'
import { Outlet, Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* 顶级页面
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space> */}
      <Link to="/Home">去home</Link>|<Link to="/About">去about</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App
