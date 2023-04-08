import lostImg from '../assets/vecteezy_404-landing-page_6549647.jpg';

function Page404(){
    return (
        <figure className='page404-container'>
            <img src={lostImg} loading="lazy" alt="Illustration of a 404 page by Vecteezy." />
            <figcaption className='page404__caption'>Illustration by <a href="https://www.vecteezy.com/">Vecteezy</a></figcaption>
        </figure>
    )
}

export default Page404;