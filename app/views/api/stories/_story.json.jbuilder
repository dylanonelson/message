json.id story.id
json.title story.title
json.body story.body
json.published story.published
json.published_at story.published_at.in_time_zone("Eastern Time (US & Canada)").strftime("%B %d, %Y, %l:%M %P") if story.published?
json.last_edited_at story.last_edited_at.in_time_zone("Eastern Time (US & Canada)").strftime("%B %d, %Y, %l:%M %P")
if story.banner?
  json.banner_url do 
    json.summary asset_path(story.banner.url(:summary))
    json.original asset_path(story.banner.url)
  end
end
json.author_id story.author.id
json.author_avatar_url story.author.avatar.url
json.author_username story.author.username
json.tags story.tags do |t|
  json.id t.id
  json.label t.label
end
