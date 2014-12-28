#loads a bunch of reaction gif urls into a file from /r/reactionGifs
import praw
f = open('reactiongifs.txt','w')
r = praw.Reddit(user_agent='reactionGif collector')
subreddit = r.get_subreddit('reactiongifs')

# limit is 1000 TODO I need more
for submission in subreddit.get_top_from_all(limit=1000):
	f.write(submission.url+ "\n")


f.close()