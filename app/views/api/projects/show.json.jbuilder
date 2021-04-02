json.extract! @project, :id, :title, :body, :favorites, :views, :category, :creator_id, :title_photo
json.photoUrl url_for(@project.title_photo)

json.creator do 
    json.extract! @project.creator, :id, :username
end