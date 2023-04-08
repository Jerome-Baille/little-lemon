import img1 from '../../assets/small/Mario and Adrian A.jpg';
import img2 from '../../assets/small/Mario and Adrian b.jpg';

function Chicago() {
    return (
        <section className="chicago-container">
            <article className="chicago__col-left">
                <header className='chicago__header'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </header>
                <p className='chicago__text'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </article>
            <aside className='chicago__col-right'>
                <div className="chicago__img-container">
                    <img 
                        className='img chicago__img chicago__img--right' 
                        src={img1} 
                        loading='lazy'
                        alt="Mario and Adrian in the kitchen of Little Lemon Chicago." 
                    />
                    <img 
                        className='img chicago__img chicago__img--left' 
                        src={img2} 
                        loading='lazy'
                        alt="Mario and Adrian in the kitchen of Little Lemon Chicago." 
                    />
                </div>
            </aside>
        </section>
    )
}

export default Chicago;