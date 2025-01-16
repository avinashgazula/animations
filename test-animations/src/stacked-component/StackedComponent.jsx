import './StackedComponent.css';
const LENGTH = 3;

const StackedComponent = () => {
    return (
        <div className="wrapper">
            {
                // The last card is always on top, the index of the bottom card is 0    
                new Array(LENGTH).fill(0).map((_, i) => (
                    <div className="card" key={i} style={{ "--index": LENGTH - i - 1 }}>
                        <p>index : {i}</p>
                    </div>
            ))}
        </div>)
}

export default StackedComponent;
