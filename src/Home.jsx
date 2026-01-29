import kit from "./assets/what-is-gunpla.webp";
import history from "./assets/what-is-gunpla-history.jpg";

function Home(){
    return (
        <>
            <div>
                <img className="rounded-t-lg object-fill" src={kit} alt="gunpla kit banner"/>
                <h1 className="font-extrabold text-2xl">What is gunpla?</h1>
                &nbsp;
                <p>Gunpla, short for "Gundam Plastic Model," refers to model kits of mecha (mobile suits)
                    from the <b>Mobile Suit Gundam</b> anime franchise, manufactured by Bandai since 1980.
                    These kits feature snap-fit plastic parts requiring no glue, offering varying levels of
                    complexity (grades) from beginner to advanced for assembling, customizing,
                    and displaying highly poseable figures. </p>
                &nbsp;
                <img className="rounded-t-lg object-fill" src={history} alt="gunpla kit banner"/>
                <h3 className="font-extrabold text-2xl">Key Aspects of Gunpla</h3>
                &nbsp;
                <b>Grades:</b> Kits are categorized by difficulty and scale, including
                <ul>
                    <li>Entry Grade (EG) (beginner),</li>
                    <li>High Grade (HG) (1/144 scale, standard),</li>
                    <li>Master Grade (MG) (1/100, high detail),</li>
                    <li>Perfect Grade (PG) (1/60, maximum complexity).</li>
                </ul>
                &nbsp;
                <p>*These are the main grades and when you delve deeper into it there are more subsets of grades for different model lines</p>
                &nbsp;
                <h3>Gunpla vs. Gundam</h3>
                <p>Gundam: The fictional mobile suit/robot in the anime series.</p>
                <p>Gunpla: The physical plastic model kit of that robot. </p>
            </div>
        </>
    )
}

export default Home;