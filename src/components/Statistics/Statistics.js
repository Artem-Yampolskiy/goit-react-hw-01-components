import React from 'react';
import PropTypes from 'prop-types';

import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        < section className={style.Statistics} >
            {{ title } && <h2 className={style.title}>{title}</h2>}  

            <ul className={style.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={style.item} key={id} style={{ backgroundColor: randomColor() }}>
                            <span className={style.label}>{label}</span>
                            <span className={style.percentage}>{percentage} %</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
const random = () => Math.floor(255 * Math.random());

function randomColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
};

Statistics.defaultProps = {
    title: "",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ).isRequired,
};
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.


export default Statistics;