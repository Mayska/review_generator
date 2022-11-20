import type { NextPage } from 'next'
import Head from 'next/head'
import { Builder } from '../src/builder'

export default function Index() {
  const builder = new Builder()

  const porps = {
    headtitre: "Review generator",
    titre: "Générateur de critique évolué pour te la péter en société.",
    finexcuse: ", donc je ne peux pas t'augmenter.",
    label: "Raconte-toi là encore => ",
    btntext: "ICI",
    conclusion: "Tu n'as pas vu le film, mais tu veux donner ton avis...",
    signature: "By Maysk@"

  }
  return (
    <div className="container-xl">
      <Head>
        <title>{porps.headtitre}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <br />
        <h3 className="text-center">{porps.titre}</h3>
        <h6 className='text-center text-muted'>{porps.conclusion}</h6>

        <div className="row">
          <div className="col">
          </div>
          <div className="col-10">
            <hr />
            <form action="/" method="GET">
              <p className='text fs-6'>{builder.firstParagraph}</p>
              <p className='text fs-6'>{builder.thirdParagraph}</p>
              <p className='text fs-6'>{builder.secondParagraph}</p>
              <p className='text fs-6'>{builder.fifthParagraph}</p>
              <p className='text fs-6 fst-italic'>{builder.fourthParagraph}</p>
              <hr />
              <label>{porps.label}<button type="submit" className="btn btn-success">{porps.btntext}</button></label>
            </form>
            <hr />
          </div>
          <div className="col"></div>
        </div>
      </main>
      <footer>
        <br />
        <br />
        <p className='text-end text-muted'>{porps.signature}</p>
      </footer>
    </div>
  )
}