import { Header } from "../../components/header";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useGetPostsQuery,useGetCommentsMutation } from "../../services/postApi";
import { useEffect, useState } from "react";
import userAvatar from '../../img/userAvatar.png'
import { Link } from "react-router-dom";
export function Main() {
   const {data} = useGetPostsQuery()
   const [GetComments,{data:comments}] = useGetCommentsMutation()
   const [commentState, setCommentState] = useState({});
   const [showLoader, setShowLoader] = useState(false); // Состояние для лоадера

   const getComment = (id) => {
      if (!commentState[id]) {
         setShowLoader(true); // Показать лоадер
         setTimeout(() => {
            GetComments({ id });
            setCommentState((prevState) => ({
               ...prevState,
               [id]: true,
            }));
            setShowLoader(false); 
         }, 500);
      } else {
         
         setCommentState((prevState) => ({
            ...prevState,
            [id]: false,
         }));
      }
   };
   useEffect(()=>{
      console.log(comments);
   },[comments])
   return( 
      <Container>
      <Header></Header>
      <section>
      <Row>
         {data?.map((el,i)=>(
         <Col md={4} className="mb-3" key={i} userId={el.userId} id={el.id}>
          <Card >
            <Link to={`/user/` + el.userId}>
               <Card.Img variant="top" src={userAvatar} />
            </Link>
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.body}</Card.Text>
              <Button className="mb-3" variant="primary" onClick={() => getComment(el.id)}>
                  {commentState[el.id] ? 'Скрыть комментарии' : 'Показать комментарии'}
               </Button>
               {showLoader && commentState[el.id] && <div>Loading...</div>}
              {commentState[el.id] && (
                 <div >
                     {comments?.map((elc,ic) => (
                         <div className="mb-3" key={ic}>
                            <Card.Title>{elc.email}</Card.Title>
                            <Card.Text>{elc.body}</Card.Text>
                         </div>
                     ))}
                  </div>
               )}
            </Card.Body>
          </Card>
         </Col>
         ))}
      </Row>
    </section>

      </Container>
   )
}