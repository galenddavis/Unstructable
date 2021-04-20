json.extract! @project, :id, :title, :favorites, :views, :category, :creator_id, :created_at
# debugger
if @project.title_photo.attached?
    json.photoUrl url_for(@project.title_photo)
else
    json.photoUrl url_for('https://unstructable-seeds.s3.amazonaws.com/no_photo_attached.png')
end

# debugger

json.steps @project.steps
json.comments @project.comments

# debugger

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


