import { BoxPlotData } from "../types/boxPlot";

function getMedian(sorted: number[], len: number, mid: number): number {
    return len % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
}

function qObtainer(sorted: number[], len: number, mid: number): [number, number] {
    const lowerHalf = sorted.slice(0, mid);
    const upperHalf = sorted.slice(len % 2 === 0 ? mid : mid + 1);

    const q1 = getMedian(lowerHalf, lowerHalf.length, Math.floor(lowerHalf.length / 2));
    const q3 = getMedian(upperHalf, upperHalf.length, Math.floor(upperHalf.length / 2));

    return [q1, q3];
}

export function getBoxPlot(arr: number[]): BoxPlotData {
    const sorted = arr.slice().sort((a, b) => a - b);
    const len = sorted.length;
    const mid = Math.floor(len / 2);

    const [q1, q3] = qObtainer(sorted, len, mid);
    const q2 = getMedian(sorted, len, mid);

    const iqr = q3 - q1;
    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    const outliers = sorted.filter(value => value < lowerBound || value > upperBound);

    return {
        min: Math.min(...sorted.filter(v => v >= lowerBound && v <= upperBound)),
        max: Math.max(...sorted.filter(v => v >= lowerBound && v <= upperBound)),        
        q1,
        q2,
        q3,
        outliers,
    };
}