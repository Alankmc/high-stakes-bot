import scrapy
import logging

logging.getLogger('scrapy').setLevel(logging.WARNING)
f = open('crawl.txt', 'w')
class fpf_spider(scrapy.Spider):
  name = 'Frases para Face'
  start_urls = [raw_input('-->')]
  
  def parse(self, response):
    phrases = response.css('span[id^="phrase-content"]::text').extract()
    for phrase in phrases:
      f.write(phrase.encode('utf-8') + '\n')
    for next_page in response.css('a.pagination-nav.next'):
      yield response.follow(next_page, self.parse)