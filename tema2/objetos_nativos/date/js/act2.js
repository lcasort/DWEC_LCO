/*
--------------------------------------------------------------------------------
                                  FUNCTIONS
--------------------------------------------------------------------------------
*/

/**
 * Función para calcular el tiempo que queda hasta la fecha dada en años, meses
 * y días.
 * @param {Date} date 
 */
function timeTo(dateTo)
{
    const today = Date.now();
    const dif = dateTo.getTime() - today;
    const yToday = Math.floor(((((dif / 1000) / 3600) / 24) / 30) / 12);
    const mToday = Math.floor(((((dif / 1000) / 3600) / 24) / 30) - (yToday * 12));
    const dToday = Math.floor(((((dif / 1000) / 3600) / 24)) - (mToday * 30));

    console.log('Para el ' + (dateTo.getUTCDate()+1) + '/'
    + (dateTo.getUTCMonth()+1) + '/' + dateTo.getUTCFullYear() + ' quedan: '
    + yToday + ' años, ' + mToday + ' meses y ' + dToday + ' días.');
}



/*
--------------------------------------------------------------------------------
                                    MAIN
--------------------------------------------------------------------------------
*/
const dateTo = new Date(2023,5,17);
timeTo(dateTo);