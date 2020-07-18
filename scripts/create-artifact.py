#!/usr/bin/env python3
# encoding=utf-8
import os
import time
import datetime


def main():
    ts = datetime.datetime.now()
    formatted_ts = ts.strftime('%Y%m%d-%H%M%S')
    # print(formatted_ts)

    archive_basename = f'SE1410-prototype-{formatted_ts}'
    archive_filename = f'{archive_basename}.zip'

    os.system(f'git archive HEAD -o "{archive_filename}"')
    os.system(f'unzip {archive_filename} -d {archive_basename}')


if __name__ == '__main__':
    main()
