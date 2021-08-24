import React from 'react';
const DisplayDetails = ({
    title,
    description,
    worstCase,
    avgCase,
    bestCase
}) => {
    return (
      <div className="SortInfo">
        <hr className="new"/>
        <h1>{title ? title : 'Welcome to Sorting Visualizer'}</h1>
        <div className="SortInfo__Body">
          <div className="SortInfo__Article">
            {description ? (
              description
            ) : (
              <p>
                Kindly select an algorithm to visualize its working on a randomly generated array.
              </p>
            )}
          </div>
          <vl></vl>
  
          <aside className="SortInfo__Aside">
            <h3>Performance</h3>
            <table>
              <tbody>
                <tr>
                  <td>Worst-case time complexity</td>
                  <td>
                    <code>{worstCase}</code>
                  </td>
                </tr>
  
                <tr>
                  <td>Average time complexity</td>
                  <td>
                    <code>{avgCase}</code>
                  </td>
                </tr>
  
                <tr>
                  <td>Best-case time complexity</td>
                  <td>
                    <code>{bestCase}</code>
                  </td>
                </tr>
  
                
              </tbody>
            </table>
          </aside>
        </div>
      </div>
    );
  };
  
export default DisplayDetails;