
json.comment do 
    json.extract! @comment, :id, :body, :writer_id
    json.writer @comment.writer.username
end