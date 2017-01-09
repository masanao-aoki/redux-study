require 'net/http'
require 'uri'
require 'json'

uri = URI.parse('http://qiita.com/api/v2/items')
params = { :page => 1, :query => 'qiita+title:html5' }
uri.query = URI.encode_www_form(params)
json = Net::HTTP.get(uri)
result = JSON.parse(json)
render :json => result
