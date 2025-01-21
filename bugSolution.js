```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Only run the effect when the component mounts
    // by using an empty dependency array([])
    console.log('Component Mounted');
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```