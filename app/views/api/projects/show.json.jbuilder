json.extract! @project, :id, :title, :favorites, :views, :category, :creator_id, :created_at
# 
if @project.title_photo.attached?
    json.photoUrl url_for(@project.title_photo)
else
    json.photoUrl url_for('https://unstructable-seeds.s3.amazonaws.com/no_photo_attached.png')
end

# 

json.steps @project.steps

json.comments @project.comments.each do |comment|
    json.extract! comment, :id, :body, :writer_id
    json.writer comment.writer.username
end

# 

json.creator do 
    json.extract! @project.creator, :id, :username
    json.otherProjects @project.creator.projects.each do |project|
        json.extract! project, :id
        if project.title_photo.attached?
            json.photoUrl url_for(project.title_photo)
        else
            json.photoUrl url_for('https://unstructable-seeds.s3.amazonaws.com/no_photo_attached.png')
        end
    end
end


