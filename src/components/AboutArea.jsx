export default function AboutArea() {

    const tecs = [
        {
            icon: '',
            title: 'HTML 5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            icon: '',
            title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            icon: '',
            title: 'MySQL',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            icon: '',
            title: 'CSS 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            icon: '',
            title: 'Node.js',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            icon: '',
            title: 'React',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }]

    const listTecs = tecs.map(tec => 
        <div>
            
        </div>
    );


    return(
        <article>
            <div>
                <h1>Sobre</h1>
                <hr />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo ipsam debitis perferendis accusamus atque incidunt expedita rerum soluta tempore, architecto laboriosam qui veritatis ut distinctio sunt ipsa? Voluptates, quasi.</p>

            

            <div className="tec-area">
                
            </div>
        </article>
    )
}