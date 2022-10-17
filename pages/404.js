import Image from 'next/image'
import { useRouter } from 'next/router'
import gif from '../public/not-found.gif'
import Layout from '../components/Layout'

export default function NotFound() {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <Layout>
      <div className="container" >
        <h1>404 PAGE NOT FOUND</h1>
        <button href="#" onClick={goBack}>
          Back
        </button>
        <br/>
        <Image src={gif} alt="not found" />
        <style>
          {`
            .container {
              margin-top: 1.6rem;
              height: 85vh;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              background: black;
              border-bottom: 1px solid rgb(21, 27, 38);
            }
          `}
        </style>
      </div>
    </Layout>
  )
}
