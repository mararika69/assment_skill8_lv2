// Helper function to handle requests and errors
const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // or []/{} based on the expected return type
  }
};

export default handleRequest;