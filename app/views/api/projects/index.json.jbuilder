
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :id, :title, :favorites, :views, :category, :creator_id, :title_photo
        json.photoUrl url_for(project.title_photo)
        json.creator project.creator.username
    end
end