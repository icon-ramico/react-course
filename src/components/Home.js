import CommentList from './CommentList';
import Users from './Users';
import useFetch from '../hooks/useFetch'
const Home = () => {
  // const [comments, setComments] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // not async
  //   fetch('https://jsonplaceholder.typicode.com/comments1')
  //     .then(res => {
  //       if (!res.ok) throw new Error('Error from server!');
  //       return res.json();
  //     }) // {name:'ali'} in json {"name":"ali"}
  //     .then(data => {
  //       setComments(data);
  //       setLoading(false);
  //     })
  //     .catch(e => {
  //       setError(e.message);
  //       setLoading(false);
  //     });
  //   return () => {
  //     setComments(null);
  //     setError(null);
  //     setLoading(true);
  //   }; // clean up
  // }, []);

  const { data: users, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users');
  const {
    data: comments,
    error: CommentError,
    loading: CommentLoading,
  } = useFetch('https://jsonplaceholder.typicode.com/comments');

  return (
    <div className='App'>
      <h1 className='header'> Hello Guest </h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {
        // javascript evaluation  for ('',false , null, 0, undefined) is: false
        users && <Users data={users} title='Users' />
      }

      {CommentError && <div>{CommentError}</div>}
      {CommentLoading && <div>Loading...</div>}
      {
        // javascript evaluation  for ('',false , null, 0, undefined) is: false
        comments && <CommentList data={comments} title='Comments' />
      }
    </div>
  );
};
export default Home;
