import sys
import subprocess
import os

def run_script(script_name):
    script_path = os.path.join(os.path.dirname(__file__), script_name)
    print(f"\n==========================================")
    print(f"Running {script_name}...")
    print(f"==========================================")
    result = subprocess.run([sys.executable, script_path], check=False)
    if result.returncode != 0:
        print(f"Error running {script_name} (exit code {result.returncode})")
    else:
        print(f"Finished {script_name} successfully.")

if __name__ == '__main__':
    run_script('fetch_prices.py')
    run_script('update_from_yahoo.py')
    run_script('fetch_news.py')
    print("\nAll daily updates completed successfully!")
