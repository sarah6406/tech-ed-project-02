# tech-ed-project-02
basic cookie-clicker game

// user story
As a user, I can visit the page and see current number of cookies and upgrades. When I refresh the page, the local storage saves the current number of cookies and upgrades so I don't need to start the game again. As a user, I can increase number of cookies created by clicking on the cookie and increasing number of upgrades for more cookies per second. I also have the possibility of resetting if I want to restart the game to beat a personal best.

// I feel I have achieved most of the requirements on this project. I have done some simple styling using CSS to make the page a bit more appealing to the eye when playing the game. I was a little overwhelmed with the javascript, as even though I've had some exposure to it, it's so far the largest amount of JS I've had to manipulate and understand.
I have tried to solve some of the bugs, such as disallowing the cookie numbers to go below zero and setting an alert if the user tries to buy an upgrade without having enough cookies. However, I wanted the cookie-count to automatically start incrementing when the page was opened but it only increments once I have bought an upgrade. I am not sure if my 'if' statement within the getUpgrade() function is the cause of this. I will continue to improve this projects as my level of javascript knowledge develops.

TO FIX: WHY IS COOKIE COUNTER NOT STARTING AUTOMATICALLY ON-LOAD UNLESS THERE IS ONE UPGRADE?