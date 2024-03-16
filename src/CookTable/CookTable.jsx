import PropTypes from 'prop-types';
const CookTable = ({cooks, currentcooks, handleCurrentCook, totalTime, totalCalories }) => {

    return (
        <div className='m-5'>
            <h1 className='font-semibold text-2xl text-center'>Want to cook: {cooks.length}</h1>
            <hr className='border-x-2 my-4'></hr>
            <table className='table table-xs lg:table-sm'>
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cooks.map((cook, index) => (
                            <>
                                <tr>
                                    <td className='font-bold'>{index + 1}</td>
                                    <td>{cook.recipe_name}</td>
                                    <td>{cook.preparing_time} minutes</td>
                                    <td>{cook.calories} calories</td>
                                    <td>
                                        <button onClick={() => handleCurrentCook(cook)} className='btn btn-xs lg:btn-md bg-[#0BE58A]'>Preparing</button>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>

            <h1 className='font-semibold text-2xl text-center mt-4'>Currently cooking: {currentcooks.length}</h1>
            <hr className='border-x-2 my-4'></hr>
            <table className='table table-xs lg:table-sm'>
                <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentcooks.map((cook, index) => (
                            <>
                                <tr>
                                    <td className='font-bold'>{index + 1}</td>
                                    <td>{cook.recipe_name}</td>
                                    <td>{cook.preparing_time} minutes</td>
                                    <td>{cook.calories} calories</td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>

            <div className='font-medium text-sm lg:text-base flex flex-row justify-end gap-5'>
                <p>Total Time = <br />{totalTime} Minutes</p>
                <p>Total Calories = <br />{totalCalories} Calories</p>
            </div>
        </div>
    );
};

CookTable.propTypes = {
    cooks: PropTypes.array.isRequired,
    handleCurrentCook: PropTypes.func.isRequired,
    currentcooks: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired,
};

export default CookTable;