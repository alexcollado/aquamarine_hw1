package com.cse308.stratego.demo.util;

public class MoveUtil {
    public static String mapIndexToPosition(int index) {
        int num = index % 10;
        // Ascii value of 'A'
        int pre = 65;
        int temp = index - num;
        while (temp >= 10) {
            pre++;
            temp -= 10;
        }

        return String.valueOf((char) pre) + num;
    }

    public static int mapPositionToIndex(String pos) {
        int first = (int)pos.charAt(0);
        int second = Integer.parseInt(pos.substring(1));
        return first + second;
    }
}
