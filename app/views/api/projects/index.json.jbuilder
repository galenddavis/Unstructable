
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :id, :title, :body, :favorites, :views, :category, :creator_id, :title_photo
        json.photoUrl url_for(project.title_photo)
    end
end