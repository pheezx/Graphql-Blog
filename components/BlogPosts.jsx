import { useQuery } from "@apollo/client";
import { GET_BLOGPOSTS } from "../graphql/queries";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  spacing: {
    margin: "15px 0",
  },
});

const BlogPost = ({ text, id, onDelete, openModal }) => {
  const classes = useStyles();

  return (
    <Card className={classes.spacing}>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => openModal(id)} size="small" color="primary">
          Edit
        </Button>
        <Button onClick={() => onDelete(id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

const BlogPosts = ({ onDelete, openModal }) => {
  const { loading, error, data } = useQuery(GET_BLOGPOSTS);
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }

  return data.blogPosts.map((blogPostData) => (
    <BlogPost openModal={openModal} onDelete={onDelete} {...blogPostData} key={blogPostData.id} />
  ));
};

export default BlogPosts;
