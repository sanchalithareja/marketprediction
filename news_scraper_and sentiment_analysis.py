from transformers import pipeline

def analyze_news_finbert(company_name):
    company_query = company_name.replace(" ", "+")
    rss_url = f"https://news.google.com/rss/search?q={company_query}&hl=en-US&gl=US&ceid=US:en"
    feed = feedparser.parse(rss_url)

    # Load pre-trained financial sentiment analysis pipeline
    sentiment_analysis = pipeline("sentiment-analysis", model="yiyanghkust/finbert-tone")

    for i, entry in enumerate(feed.entries, start=1):
        title = entry.title
        sentiment = sentiment_analysis(title)[0]

        print(f"{i}. {title}")
        print(f"   Sentiment: {sentiment['label']} (Confidence: {sentiment['score']:.2f})")
        print(f"   Published: {entry.published}")
        print(f"   Link: {entry.link}\n")

# Run analysis on a specific company
analyze_news_finbert("HDFC")
