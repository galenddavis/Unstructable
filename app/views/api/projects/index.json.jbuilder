
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :id, :title, :body, :favorites, :views, :category, :creator_id, :title_photo
        json.photoUrl url_for(project.title_photo)
        json.creator project.creator.username
        # json.creator do 
        #     json.extract! project.creator, :username
        # end
    end
end