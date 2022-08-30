import '../../recipes_style.css';
import '../../bulma.css';

const Home = () => {
    return (
        <div className="tabcontent recipe section">
            <div className="has-text-centered section pt-0">
                <h1 className="title">Welcome!</h1>
                <p className="subtitle">A quick guide to the site</p>
            </div>

            <p className="story">
            Hi! I'm Mihir Lele, and this website is a compilation of recipes I've either created or collected from others. Cooking is a huge passion of mine, so I made this website to share 
            that with you! Below I've included some helpful reminders about how this site is laid out.
            </p>
            <p className="story">
            Basically, each recipe has 3 sections: Ingredients (what goes in it and how much), Instructions (the basic and necessary steps), and Story Time (an explanation of what the recipe 
            means to me, my journey in making it, and some helpful tips). Often it is best to read the Story Time explanation if you're making this recipe for the first time, since it is far 
            more detailed than the instructions section and lets you know why I included certain steps. If it's a simple recipe or you've made it before, you don't have to read any further 
            than the Instructions section.
            </p>
            <p className="story">
            The recipes are split under 7 categories which you can see on the bar at the top. The names are mostly self-explanatory, but you may be confused by The Laboratory. That's the 
            section for highly experimental recipes that I've created. Things that make you stop and think if such foods should ever have been created. But I had fun making them, so I'm sure 
            you will too. Please note that the food does not actually look like Mt. Rainier, I'm just using that as a placeholder image until I get actual pictures of my food.
            </p>
            <p className="story">
            You might notice that sometimes (a lot of times) I don't include ingredient amounts. In these cases, you have to rely on your taste, your instincts, and/or learn the right 
            amounts through trial-and-error. If you get the measurements wrong, that's okay, you can always try again. It'll make you better at cooking. That's what I love most about 
            cooking: experimenting! The kitchen is like my laboratory. I like finding out what works and what doesn't and why. Don't be afraid to take risks in the kitchen either. The 
            recipes here aren't strict rules. It's your kitchen and your taste buds, so do whatever you want.
            </p>
        </div>
    );
}

export default Home;
