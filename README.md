# Curve UI/UX "Proof of Life"

It's a mess, but it's a start. 
* Moved Medium's Snowflake components into a Gatsby starter site.
* Removed all [flow](https://flow.org/) syntax (a static type checker they were using). It just added a layer of complexity and another thing to learn for our project at this point. Might be good to eventually add flow back in or use TS, but not in the scope of what we can achieve in 4 days. 
* Updated to (mostly) use styled component syntax
* Updated the `constants.js` file to match the Code Fellows [professional competencies](https://codefellows.github.io/common_curriculum/career_coaching/Professional_Competencies). Hard coded just like the old data was.

### To get it hosted on your machine
* Clone the repo onto your computer
* `npm i` to install all dependencies
* `gatsby develop` to host a hot-loaded site at `localhost:8000`

### Currently, the site looks like this
![Curve proof of life](https://i.imgur.com/3I8jnDB.png)
