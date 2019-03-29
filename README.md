# LightStreetChallenge
Netflix Ticker &amp; Analytic Site in .NET

### Instructions for Running
1. Clone the repo or download the zip file onto your *Windows* computer
2. Since the project is not deployed to a server you will need to run locally. Open up an IDE able to run the code- the easiest to use is probably [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)
3. Launch the project via the run command, the green play button at the top, or under the "Debug" menu.

### Page Description
0. Header- This header shows you the current price, change (absolute and percent) from the previous day, as well as other high level metrics. The change information will be red if lower than the previous day, otherwise it will be green. Note that the "NFLX" ticker reloads the page, while the Netflix icon takes you to their media site.
1. Home Page- This graph shows the daily price fluctuation, including highs/lows, over the given time period. Hovering will provide more detailed information and the bar at the top allows a closer look at a customized time range.
2. Historical & Consensus- These graphs show the information over time for the given CSV metrics. The important thing to note here is that you can isolate a metric by clicking others on the legend above the graph. Especially for metrics with different Y axes, this is quite helpful.
3. Outside Sources- I pulled a variety of RSS Feeds as well as Twitter timeline data for Netflix. Clicking on various links should open up a new tab and take you to the destination.
4. Competitor Pages- These all have either RSS Feeds, Twitter accounts, or both that are pertinent to the specified competitor. Some were harder to retrieve than others and required a bit of (legal) sleuthing.

#### Things to Note
- A number of external sources were used in this project such as RSS Feeds and Twitter Accounts. If the twitter handle changes or RSS Feed goes out of date, this could affect what is displayed. In a production system this would be continually monitored.
- An API called AlphaVantage is used for the header information, much similar to Yahoo Finance API. They limit my free account to 5 API calls per minute, so if you don't see any of the ticker info in the header after refreshing a bunch of times, this is why.


#### What I didn't get to/Future Dev
- It was hard to find after hours price information accessible from a free API. I could import this manually/hardcode it, but I prefer it to be automatic. This process could be implemented in the future.
- As the instructions stated, the site should be password protected. I ended the development early as requested, so I did not get a chance to implement this feature. However, it is trivial to add a login page that uses cookies and otherwise prevents unauthorized access.
