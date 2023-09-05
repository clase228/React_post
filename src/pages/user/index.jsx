import { Header } from "../../components/header";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetUserInfoMutation,useGetUserPostsMutation,useGetCommentsMutation } from "../../services/postApi";
import { useEffect,useState } from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import userAvatar from '../../img/userAvatar.png'
import { Link } from "react-router-dom";
export function User() {
   const [getUserInfo, { data }] = useGetUserInfoMutation(); 
   const [getUserPosts, { data:posts }] = useGetUserPostsMutation(); 
   const params = useParams();

   useEffect(() => {
      getUserInfo({ id: params.id });
      getUserPosts({ id: params.id })
   }, []); 
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
   return(
      <Container>
         <Header></Header>
         <Row  className="mb-3">
         <Card style={{ width: '60%',margin: '0 auto' }}>
            <Card.Body>
              <Card.Title className="text-center">{data?.name}</Card.Title>
              <Row>
                  <Col sm={6} md={2}><Card.Text >Имя:</Card.Text></Col> 
                  <Col sm={6} md={4}><Card.Text >{data?.username}</Card.Text></Col> 
                  <Col sm={6} md={2}><Card.Text >Телефон:</Card.Text></Col> 
                  <Col sm={6} md={4}><Card.Text >{data?.phone}</Card.Text></Col> 
              </Row>
              <Row>
                  <Col sm={6} md={2}><Card.Text >Email:</Card.Text></Col> 
                  <Col sm={6} md={4}><Card.Text >{data?.email}</Card.Text></Col>  
                  <Col sm={6} md={2}><Card.Text >Сайт:</Card.Text></Col> 
                  <Col sm={6} md={4}><Card.Text > {data?.website}</Card.Text></Col> 
              </Row>
            </Card.Body>
          </Card>
         </Row>
         <Row>
         {posts?.map((el,i)=>(
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
                 <div>
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
      </Container>
   )
}