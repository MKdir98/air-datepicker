/* eslint-disable */

import Datepicker from 'datepicker';
import en from 'locale/en';
let $input = document.querySelector('#dp');

window.dp = new Datepicker($input, {
    inline: true,
    // selectedDates: ['2021-06-01', new Date('2021-06-05')],
    // multipleDates: true,
    // range: true,
    timepicker: true,
    // toggleSelected: false,
    onSelect({date}){
        console.log(date);
    },
    buttons: [
        {
            content(dp) {
                return dp.opts.timepicker ? 'Off' : 'On'
            },
            onClick(dp) {
                dp.update({
                    timepicker: !dp.opts.timepicker,
                    viewDate: vd
                })
            }
        }
    ],
    timeFormat: 'HH:mm',

    multipleDates: true,
    // view: 'months',
    // minDate: new Date('2020-08-01'),
    // maxDate: new Date('2020-10-31'),
    // onRenderCell({date}) {
    //     return {
    //         disabled: date.getDate() === 27
    //     }
    // }
});

// dp.selectDate(new Date('2021-06-01'))
// dp.selectDate(new Date('2021-06-05'))


document.querySelector('#destr').addEventListener('click', () => {
    dp.destroy();
})

let dates = [new Date(), new Date('2021-06-10'), new Date('2021-06-15')];
let toggle = true;
document.querySelector('#update').addEventListener('click', () => {
    console.time('update');
    dp.update({
        // view: 'years',
        // prevHtml: 'prev',
        // range: !dp.opts.range,
        minDate: new Date('2021-06-17'),
        // maxDate: new Date('2021-06-27'),
        // locale: en,
        // buttons: toggle ? ['clear'] : false,
        // selectedDates: dates[Math.floor(Math.random() * dates.length -1)],
        // timepicker: !dp.opts.timepicker,
    })
    console.timeEnd('update');
    toggle = !toggle;
})


if (module.hot) {
    module.hot.accept();
}
