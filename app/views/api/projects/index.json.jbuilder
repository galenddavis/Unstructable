
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :id, :title, :favorites, :views, :category, :creator_id
        if project.title_photo.attached?
            json.photoUrl url_for(project.title_photo)
        else
            json.photoUrl url_for('https://unstructable-seeds.s3.amazonaws.com/no_photo_attached.png')
        end
        json.creator project.creator.username
    end
end

# json.photoUrl do 
#     if project.title_photo.present?
#         url_for(project.title_photo)
#     else
#         json.null!
#     end
# end