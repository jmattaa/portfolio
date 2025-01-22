import { Link } from "react-router-dom";

const AboutMeText = () => {
    const whatzMyFullAge = () => {
        const today = new Date();

        // Month is zero-indexed (7 = Agust) 😭
        const birthDate = new Date(2007, 7, 18);

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (days < 0) {
            months--;
            const previousMonth = new Date(today.getFullYear(), today.getMonth(),
                0);
            days += previousMonth.getDate();
        }

        return { years, months, days };
    };

    const age = whatzMyFullAge();
    const ageString = `${age.years} years, ${age.months} months, and ${age.days} days`;

    return (
        <p className="leading-loose">
            <p>
                I'm <span className="text-palette-5">Jonathan</span>, honestly...
                I don't know what to write here, <mark>who am I?</mark>{" "}
                Thats actually a quite hard question. But I'll tell you about what
                I like doing and hopefully you'll get to know something about me. I
                am (currently as of 2025) a high school student in Sweden, studying
                what they call natural sciences
                (basically <em>burning myself out</em>). So... what do i do to
                procrastinate all my schoolwork? Well I like being creative,
                whether it's coding, music, or speaking
                (how's that creative? you may ask, well... take my word for it).
            </p>
            <p className="indent-8">
                I tripped into the coding world in when i was 9 in 2016.
                I fell further down the rabbit hole... until now that I'm using
                Arch linux and NeoVim to write C
                (check out{" "}
                <Link to="https://github.com/jmattaa/laser"
                    className="underline text-palette-5 hover:underline-offset-2">
                    jmattaa/laser
                </Link>).
                The music
                started also in 2016 (why does everything happen in 2016?)
                I started learning some
                piano on my own and now I'm just hooked. Speaking then...? I just
                love to stand in front of a microphone with people listening to me
                as i <mark>yap</mark> about anything, that's just fun.
            </p>
            <p className="indent-8">
                One thing though, that
                defines me most is that, I'm a <em>child of God</em>, a follower of{" "}
                <mark className="p-2 drop-shadow-glow">Jesus Christ</mark>. 
                I'd say that this is what defines me the most, and makes me who 
                I am. 
                Hopefully this was a good summary of my {ageString}.
            </p>
        </p>
    )
};

export default AboutMeText;
