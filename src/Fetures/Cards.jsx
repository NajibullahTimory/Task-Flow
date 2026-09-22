
function Cards() {
    return (
        <main className="flex justify-center items-center p-3 m-3">
            <div className="w-250 h-50 bg-yellow-50 p-4 m-4 rounded-2xl grid grid-cols-3">
                <div>
                    <h1>3</h1>
                    <h2>Total</h2>
                </div>
                <div>
                    <h1>2</h1>
                    <h2>Active</h2>
                </div>
                <div>
                    <h1>1</h1>
                    <h2>Done</h2>
                </div>
            </div>
        </main>
    )
}

export default Cards