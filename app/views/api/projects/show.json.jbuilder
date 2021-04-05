json.extract! @project, :id, :title, :body, :favorites, :views, :category, :creator_id, :title_photo, :created_at
json.photoUrl url_for(@project.title_photo)

json.creator do 
    json.extract! @project.creator, :id, :username
    json.otherProjects @project.creator.projects.each do |project|
        json.extract! project, :id
        json.photoUrl url_for(project.title_photo)
    end
end


